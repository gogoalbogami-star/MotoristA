/*
  # Adicionar campos separados de modelo e ano do veículo

  1. Alterações
    - Adicionar coluna `modelo_veiculo` (text) - Modelo do caminhão
    - Adicionar coluna `ano_veiculo` (text) - Ano do caminhão
    - Manter `modelo_ano_caminhao` para compatibilidade (será removido depois)
  
  2. Observações
    - Campos novos são opcionais inicialmente
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'cadastros_motoristas' AND column_name = 'modelo_veiculo'
  ) THEN
    ALTER TABLE cadastros_motoristas ADD COLUMN modelo_veiculo text DEFAULT '';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'cadastros_motoristas' AND column_name = 'ano_veiculo'
  ) THEN
    ALTER TABLE cadastros_motoristas ADD COLUMN ano_veiculo text DEFAULT '';
  END IF;
END $$;