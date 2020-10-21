
export class Listas {

  static Targets = [
    { desc: 'ABDOMINAL', value: 'ABDOMINAL'},
    { desc: 'ANTEBRACO', value: 'ANTEBRACO' },
    { desc: 'BICEPS', value: 'BICEPS' },
    { desc: 'COSTA', value: 'COSTA' },
    { desc: 'COXA', value: 'COXA' },
    { desc: 'GLUTEO', value: 'GLUTEO' },
    { desc: 'OMBROTRAPEZIO', value: 'OMBROTRAPEZIO' },
    { desc: 'PANTURRILHA', value: 'PANTURRILHA' },
    { desc: 'PEITO', value: 'PEITO' },
    { desc: 'PERNAPOSTERIOR', value: 'PERNAPOSTERIOR' },
    { desc: 'QUADRIL', value: 'QUADRIL' },
    { desc: 'TRICEPS', value: 'TRICEPS' },

  ];

  static Tipo = [
    { desc: 'Aluno', value: 'A' },
    { desc: 'Funcionário', value: 'F' },
    { desc: 'Professor', value: 'P' },
    { desc: 'Visitante', value: 'V' },
  ];

  static Permissions = [
    {desc: 'Administrador', value: 'ROLE_ADM_DFIT'},
    {desc: 'Aluno', value: 'ROLE_ALUNO_DFIT'},
    {desc: 'Dash', value: 'ROLE_DASH_DFIT'},
    {desc: 'Professor', value: 'ROLE_PROF_DFIT'},
    {desc: 'Usuário', value: 'ROLE_USER'},
  ];

  static Status = [
    { desc: 'Ativo', value: 'A' },
    { desc: 'Desligado', value: 'D' },
    { desc: 'Licença', value: 'L' },
    { desc: 'Formado', value: 'F' },
  ];

  static day = [
    { desc: 'Segunda', value: 'seg' },
    { desc: 'Terça', value: 'ter' },
    { desc: 'Quarta', value: 'qua' },
    { desc: 'Quinta', value: 'qui' },
    { desc: 'Sexta', value: 'sex' },
    { desc: 'Sábado', value: 'sab' },
  ];
}
