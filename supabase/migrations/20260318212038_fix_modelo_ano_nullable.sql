/*
  # Tornar campo modelo_ano_caminhao opcional

  1. Alterações
    - Alterar coluna `modelo_ano_caminhao` para permitir NULL
    - Adicionar valor default vazio
  
  2. Observações
    - Este campo não é mais usado no formulário
    - Os novos campos são modelo_veiculo e ano_veiculo
*/

ALTER TABLE cadastros_motoristas 
ALTER COLUMN modelo_ano_caminhao DROP NOT NULL;

ALTER TABLE cadastros_motoristas 
ALTER COLUMN modelo_ano_caminhao SET DEFAULT '';