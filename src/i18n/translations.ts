export const translations = {
  en: {
    nav: {
      projects: 'Projects',
      skills: 'Technical Skillset'
    },
    hero: {
      role: 'Junior Backend Developer · Software Engineering Student',
      bio: 'Former translator and systemic functional linguistics specialist turned developer. Focused on clean architecture, REST APIs, and DevOps — driven by curiosity for backend systems, security, and whatever language comes next.',
      viewProjects: 'View Projects'
    },
    skills: {
      heading: 'Technical Skillset',
      categories: {
        languages: 'Languages',
        backend: 'Backend & Architecture',
        frontend: 'Frontend & UI',
        devTools: 'Dev Tools & Others'
      }
    },
    projects: {
      heading: 'Curated Projects',
      viewSource: 'View Source',
      source: 'Source',
      visit: 'Visit',
      featuredDescription:
        'A REST API for restaurant management, handling products, tables, table sessions, and orders.',
      // Order must match projects array in data/projects.ts
      list: [
        'REST API for tracking daily meals and diet compliance.',
        'An AI assistant to improve gaming sessions.',
        "Appointment management system for a pet shop, developed as a hands-on project for Rocketseat's Full-Stack Training course."
      ]
    },
    footer: {
      text: '© 2026 Marcelle Alves. Fueled by caffeine, curiosity, and the occasional existential crisis about semicolons.'
    }
  },
  pt: {
    nav: {
      projects: 'Projetos',
      skills: 'Habilidades Técnicas'
    },
    hero: {
      role: 'Desenvolvedora Backend Júnior · Estudante de Engenharia de Software',
      bio: 'Especialista em linguística sistêmico-funcional e tradutora migrada para o desenvolvimento. Focada em arquitetura limpa, REST APIs e DevOps — movida pela curiosidade por sistemas backend, segurança e qualquer linguagem que aparecer.',
      viewProjects: 'Ver Projetos'
    },
    skills: {
      heading: 'Habilidades Técnicas',
      categories: {
        languages: 'Linguagens',
        backend: 'Backend & Arquitetura',
        frontend: 'Frontend & UI',
        devTools: 'Ferramentas Dev & Outros'
      }
    },
    projects: {
      heading: 'Projetos em Destaque',
      viewSource: 'Ver Código',
      source: 'Código',
      visit: 'Visitar',
      featuredDescription:
        'Uma REST API para gestão de restaurantes, gerenciando produtos, mesas, sessões de mesa e pedidos.',
      // Order must match projects array in data/projects.ts
      list: [
        'REST API para rastreamento de refeições diárias e conformidade com a dieta.',
        'Um assistente de IA para melhorar as sessões de gaming.',
        'Sistema de agendamento para pet shop, desenvolvido como projeto prático do curso Full-Stack da Rocketseat.'
      ]
    },
    footer: {
      text: '© 2026 Marcelle Alves. Movida por café, curiosidade e uma crise existencial ocasional sobre ponto e vírgula.'
    }
  }
} as const
