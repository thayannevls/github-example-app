export {}
declare global {
    interface Repository {
        name: string,
        description?: string,
        visibility: 'publish' | 'private',
        html_url: string,
        open_issues: number,
        stargazers_cout: number
    }  

    interface User {
        login: string
        avatar_url: string
        url: string
        html_url: string
    }
}