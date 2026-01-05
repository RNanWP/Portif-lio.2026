# 🚀 Portfólio Pessoal - RO.

Um portfólio moderno e responsivo desenvolvido com React, TypeScript, Tailwind CSS e shadcn/ui.

## 📋 Tecnologias Utilizadas

- **Vite** - Build tool rápido para desenvolvimento
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI acessíveis e customizáveis
- **React Router DOM** - Roteamento para React
- **Lucide React** - Ícones modernos
- **TanStack Query** - Gerenciamento de estado assíncrono

### Extensões Recomendadas para VS Code

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets

## 🚀 Como Iniciar o Projeto

### Opção 1: Clonar este Repositório

```bash
# 1. Clone o repositório
git clone <URL_DO_SEU_REPOSITORIO>

# 2. Entre na pasta do projeto
cd nome-do-projeto

# 3. Instale as dependências
npm install
# ou
npm i

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Abra no navegador
# O terminal mostrará a URL (geralmente http://localhost:5173)
```

### Opção 2: Criar um Projeto do Zero

Se você quiser criar um projeto similar do zero:

```bash
# 1. Crie um novo projeto Vite com React e TypeScript
# npm 7+, o travessão duplo adicional é necessário:
npm create vite@latest meu-portfolio -- --template react-ts

# 2. Entre na pasta do projeto
cd meu-portfolio

# 3. Instale as dependências base
npm install

# 4. Instale o Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 5. Instale o shadcn/ui (siga o wizard de configuração)
npx shadcn@latest init

# 6. Instale dependências adicionais usadas neste projeto
npm install react-router-dom @tanstack/react-query lucide-react
npm install clsx tailwind-merge class-variance-authority

# 7. Adicione componentes do shadcn/ui conforme necessário
npx shadcn@latest add button card badge
# (adicione outros componentes conforme precisar)

# 8. Inicie o servidor de desenvolvimento
npm run dev
```

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Imagens e arquivos estáticos
├── components/      # Componentes React reutilizáveis
│   ├── ui/          # Componentes shadcn/ui
│   ├── About.tsx    # Seção "Sobre Mim"
│   ├── Contact.tsx  # Seção de Contato
│   ├── Footer.tsx   # Rodapé
│   ├── Hero.tsx     # Seção Hero (banner principal)
│   ├── Navigation.tsx # Navbar
│   ├── Projects.tsx # Seção de Projetos
│   └── Skills.tsx   # Seção de Skills
├── data/            # Dados do portfólio (fácil edição)
│   ├── certifications.ts # Dados das certificações
│   ├── projects.ts  # Dados dos projetos
│   ├── skills.ts    # Dados das skills
│   └── README.md    # Guia de edição dos dados
├── hooks/           # Custom hooks
├── lib/             # Utilitários
├── pages/           # Páginas da aplicação
│   ├── Index.tsx    # Página inicial
│   ├── Certifications.tsx # Página de certificações
│   └── NotFound.tsx # Página 404
├── App.tsx          # Componente principal com rotas
├── index.css        # Estilos globais e design tokens
└── main.tsx         # Ponto de entrada da aplicação
```

## ✏️ Como Editar os Dados

### Editando Projetos (`src/data/projects.ts`)

```typescript
{
  id: 1,
  title: "Nome do Projeto",
  description: "Descrição do projeto",
  image: "URL_DA_IMAGEM",
  technologies: ["React", "TypeScript"],
  github: "https://github.com/seu-usuario/repo",
  demo: "https://seu-projeto.vercel.app"
}
```

### Editando Skills (`src/data/skills.ts`)

```typescript
{
  name: "React",
  level: "Experiência" // ou "Intermediário", "Básico", "Aprendendo"
}
```

### Editando Certificações (`src/data/certifications.ts`)

```typescript
{
  id: 1,
  title: "AWS Cloud Practitioner",
  issuer: "Amazon Web Services",
  date: "Dez 2024",
  image: "URL_DA_IMAGEM",
  link: "https://link-verificacao.com",
  isImportant: true, // true = destaque com borda dourada
  category: "aws" // Categorias: "aws", "react", "javascript", "git", "python", "java", "other"
}
```
 <div align="center"> 

Este projeto está sob a licença MIT.

**Dúvidas?** Abra uma issue ou entre em contato!

 <br />
 

   ---
  <br />
   <br />
    <br />

<div align="center">
  
  <a href="https://github.com/RNanWP">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge"/>
  </a>
  <a href="https://www.linkedin.com/in/renanodev/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>


  <br />
  <br />

  <p>
    Direitos autorais © 2025 <b>RenanODev Pós-Tech</b>. <br />
    Todos os direitos reservados.
  </p>
</div>




