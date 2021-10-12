class Github{
    constructor() {
        this.client_id = 'c47ecfadcb93800a193c';
        this.client_secret = '3b44231b7bd7cac6a90ad883b24bfeaf301d19ce';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
 const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
           const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}