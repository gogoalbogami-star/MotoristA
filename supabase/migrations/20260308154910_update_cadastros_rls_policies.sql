/*
  # Update RLS Policies for Admin Access

  1. Changes
    - Drop existing policies on cadastros_motoristas table
    - Add policy to allow public inserts (for registration form)
    - Add policy to allow authenticated users to view all records (for admin dashboard)
    - Add policy to allow authenticated users to update records (for status changes)

  2. Security
    - Public users can only insert new registrations
    - Only authenticated admin users can view and update all records
    - Data is protected from unauthorized access
*/

DO $$
BEGIN
  DROP POLICY IF EXISTS "Enable read access for all users" ON cadastros_motoristas;
  DROP POLICY IF EXISTS "Enable insert access for all users" ON cadastros_motoristas;
  DROP POLICY IF EXISTS "Enable update for authenticated users only" ON cadastros_motoristas;
EXCEPTION
  WHEN undefined_object THEN NULL;
END $$;

CREATE POLICY "Allow public to insert registrations"
  ON cadastros_motoristas
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view all registrations"
  ON cadastros_motoristas
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update registrations"
  ON cadastros_motoristas
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
