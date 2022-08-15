export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62f9b55a9c5def6c23d87764',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hx94yr2v',
                  apiId: '18057d74-ea37-4ff9-ac70-641e764b18cb'
                },
                {
                  buildHookId: '62f9b55ab952c76b34fddd72',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1m7piqxa',
                  apiId: '8ff36dc8-3a21-4e8b-85b5-bec2a7627a19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vagarwal1968/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1m7piqxa.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
