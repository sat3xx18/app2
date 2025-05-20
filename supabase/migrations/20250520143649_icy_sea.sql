/*
  # Initial schema setup for 1018 luxury clothing

  1. New Tables
    - `products`: Stores product information
      - `id` (uuid, primary key)
      - `name` (text)
      - `price` (numeric)
      - `description` (text, optional)
      - `image_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `profiles`: Stores user profiles
      - `id` (uuid, primary key, references auth.users)
      - `email` (text)
      - `is_admin` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `orders`: Stores order information
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `product_id` (uuid, references products)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Set up policies for products, profiles, and orders
    - Create trigger for automatic profile creation
*/

-- Create products table
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price numeric NOT NULL,
  description text,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  email text NOT NULL,
  is_admin boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles ON DELETE CASCADE,
  product_id uuid REFERENCES products ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policies for products
CREATE POLICY "Products are viewable by everyone" 
  ON products FOR SELECT 
  USING (true);

CREATE POLICY "Products are insertable by admins" 
  ON products FOR INSERT 
  WITH CHECK (EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() 
    AND profiles.is_admin = true
  ));

CREATE POLICY "Products are updatable by admins" 
  ON products FOR UPDATE 
  USING (EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() 
    AND profiles.is_admin = true
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() 
    AND profiles.is_admin = true
  ));

CREATE POLICY "Products are deletable by admins" 
  ON products FOR DELETE 
  USING (EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() 
    AND profiles.is_admin = true
  ));

-- Policies for profiles
CREATE POLICY "Users can view their own profile" 
  ON profiles FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON profiles FOR UPDATE 
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Policies for orders
CREATE POLICY "Users can view their own orders" 
  ON orders FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own orders" 
  ON orders FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Function to handle user creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (id, email)
  VALUES (new.id, new.email);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();