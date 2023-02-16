const registerButton = document.getElementById('register')

registerButton.addEventListener('click', () => {
    const name = document.getElementById('guest-name').value
    let movieCount = 0;
    const movie1 = document.getElementById('movie1').checked
    const movie2 = document.getElementById('movie2').checked
    const movie3 = document.getElementById('movie3').checked
    const movie4 = document.getElementById('movie4').checked
    const movie5 = document.getElementById('movie5').checked
    
    if(movie1) movieCount += 1
    if(movie2) movieCount += 1
    if(movie3) movieCount += 1
    if(movie4) movieCount += 1
    if(movie5) movieCount += 1

    alert(`${name}님, 저와 ${movieCount}개의 취향이 같으시네요!`);
    document.getElementById('name-result').innerText = `당신의 이름은.. ${name}`;
    document.getElementById('movie-result').innerText = `우리의 취향이 일치하는 영화 개수는.. ${movieCount}`;
})