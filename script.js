let votes = {
    option1: 0,
    option2: 0,
    option3: 0
};

function vote(option) {
    votes[option]++;
    updateResults();
}

function updateResults() {
    document.getElementById('result1').textContent = votes.option1;
    document.getElementById('result2').textContent = votes.option2;
    document.getElementById('result3').textContent = votes.option3;
}
