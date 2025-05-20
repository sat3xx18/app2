/*
  # Update admin email

  1. Changes
    - Update the email for the admin user profile to nikolozi18@proton.me
*/

DO $$ 
BEGIN 
  UPDATE profiles 
  SET 
    email = 'nikolozi18@proton.me',
    updated_at = now()
  WHERE is_admin = true;
END $$;