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
}