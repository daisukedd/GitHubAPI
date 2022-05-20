const ul = document.getElementById('list')

function getApi() {
    fetch('https://api.github.com/users/daisukedd/repos').then(async res => {
        if(!res.ok) {
            throw new Error(res.status)
        }

        var data = await res.json();

        data.map(item => {
            let li = document.createElement('li')
        
            li.innerHTML = `
            <strong>✅Nome do Repositório - ${item.name}</strong>
            <span>🔗URL ${item.html_url}</span>
            <span>📅Criado em: ${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
            `

            ul.appendChild(li)
        })

    }).catch(e => console.assert.log(e))
}

getApi();