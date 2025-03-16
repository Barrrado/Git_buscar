$('#buscar').click(function(event){
    event.preventDefault();
    const repositorios = $('#repos');
    const seguindo = $('#seguindo');
    const seguidores = $('#seguidores');
    const perfilimg = $('#avatar');
    const username = $('#username');
    const name = $('#name');
    const bio = $('#link');
    const seção_perfil = $('#seçao__conteiner');
    const search = $('#perfil').val();

    seção_perfil.slideUp('fast', function(){
    fetch(`https://api.github.com/users/${search}`) //buscando no GIT api.
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            perfilimg.attr('src', json.avatar_url); // Usar .attr() para definir o src
            username.text(json.login); // Usar .text() para definir o textContent
            name.text(json.name);
            repositorios.text(json.public_repos);
            seguidores.text(json.followers);
            seguindo.text(json.following);
            bio.attr('href', json.html_url); // Usar .attr() para definir o href
            
            seção_perfil.slideDown('slow');
        })
        .catch(function(error) {
            console.error("Erro ao buscar dados do GitHub:", error);
        });
})})
//             perfilimg.src = json.avatar_url;
//             username.textContent = json.login;
//             name.textContent = json.name;
//             repositorios.textContent = json.public_repos;
//             seguidores.textContent = json.followers;
//             seguindo.textContent = json.following;
//             bio.href = json.html_url;
            
//     })
// })
    // {
    //     "login": "Barrrado",
    //     "id": 69765439,
    //     "node_id": "MDQ6VXNlcjY5NzY1NDM5",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/69765439?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/Barrrado",
    //     "html_url": "https://github.com/Barrrado",
    //     "followers_url": "https://api.github.com/users/Barrrado/followers",
    //     "following_url": "https://api.github.com/users/Barrrado/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/Barrrado/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/Barrrado/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/Barrrado/subscriptions",
    //     "organizations_url": "https://api.github.com/users/Barrrado/orgs",
    //     "repos_url": "https://api.github.com/users/Barrrado/repos",
    //     "events_url": "https://api.github.com/users/Barrrado/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/Barrrado/received_events",
    //     "type": "User",
    //     "user_view_type": "public",
    //     "site_admin": false,
    //     "name": "Barrado",
    //     "company": null,
    //     "blog": "",
    //     "location": null,
    //     "email": null,
    //     "hireable": null,
    //     "bio": null,
    //     "twitter_username": null,
    //     "public_repos": 36,
    //     "public_gists": 0,
    //     "followers": 0,
    //     "following": 0,
    //     "created_at": "2020-08-16T17:37:06Z",
    //     "updated_at": "2025-03-05T20:54:06Z"
    //   }

