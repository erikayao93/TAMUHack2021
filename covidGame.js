class Question {
    question;
    correct;
    constructor(q, answer){
        this.question = q;
        this.correct = answer;
    }
    getQ(){
        return this.question;
    }
    getA(){
        return this.correct;
    }
}

var covidPercentage = 0;
var ansStreak = 0;
let playQuestions = [];
let docQuestions = [];
var questionNum = 1;
var usedQ = null;

function initDocQs(){
    var ques = "How does coronavirus spread?<br/>A: Burping<br/>B: Wound Infection<br/>C: Food Contamination<br/>D: Droplets and Touch";
    var answ = "D"
    docQuestions.push(new Question(ques, answ));
    ques = "Can someone who is infected spread coronavirus spread the virus if they do not have symptoms?<br/>A: Yes<br/>B: No<br/>C: Only if they are a kid<br/>D: Only if they are an adult"
    answ = "A"
    docQuestions.push(new Question(ques, answ));
    ques = "How are people tested for coronavirus?<br/>A: Getting a vaccine<br/>B: Taking temperature only<br/>C: Swab or spit test<br/>D: Self-diagnosing through symptoms"
    answ = "C"
    docQuestions.push(new Question(ques, answ));
    ques = "How can we protect ourselves from coronavirus?<br/>A: Wearing a mask, washing our hands<br/>B: Hanging out with friends, using hand sanitizer<br/>C: Not washing our hands, not wearing a mask<br/>D: Going to the park to play with friends, not wearing a mask"
    answ = "A"
    docQuestions.push(new Question(ques, answ));
    ques = "Where can I always get new and correct information on the coronavirus?<br/>A: My friends<br/>B: The CDC<br/>C: Strangers<br/>D: A parrot"
    answ = "B"
    docQuestions.push(new Question(ques, answ));
    ques = "What does the CDC stand for?<br/>A: Carl’s Diner Cooks<br/>B: Catch Daily Chickens<br/>C: Corona Danger Control<br/>D: Center for Disease Control"
    answ = "D"
    docQuestions.push(new Question(ques, answ));
    ques = "Can I use hand sanitizer on pets?<br/>A: No, if any pet has it on their body make sure to wash it off<br/>B: It is okay if there is a little bit they can lick it off<br/>C: Yes, hand sanitizer will kill the germs on their body<br/>D: Some pets like it and some do not"
    answ = "A"
    docQuestions.push(new Question(ques, answ));
    ques = "I was recently around someone who has COVID-19, but I feel fine. Should I stay at home?<br/>A: Yes, even though you feel fine you could still spread it for 14 days.<br/>B: No, you do not have to! You are healthy!<br/>C: No, if you do not feel sick then you do not have COVID-19.<br/>D: Wait 3 days, if you still feel good then you can go outside"
    answ = "A"
    docQuestions.push(new Question(ques, answ));
    ques = "How soon can I see symptoms of COVID-19?<br/>A: 1-6 days<br/>B: 2-14 days<br/>C: 1 day<br/>D: 7 days"
    answ = "B"
    docQuestions.push(new Question(ques, answ));
    ques = "What is the best way to prepare for an outbreak at home?<br/>A: Create a plan with steps to take if someone gets sick<br/>B: Wait till it happens then get ready<br/>C: Just buy a lot of masks<br/>D: Never ever leave the house. Ever. "
    answ = "A"
    docQuestions.push(new Question(ques, answ));
    ques = "What cleaning product should I NOT use to clean objects from COVID-19?<br/>A: Soap and water<br/>B: Hand santizer<br/>C: Bleach<br/>D: Water"
    answ = "D"
    docQuestions.push(new Question(ques, answ));
    ques = "Which mask works the best against COVID-19 germs?<br/>A: Towel<br/>B: Surgical mask<br/>C: Scarf<br/>D: Bandanas"
    answ = "B"
    docQuestions.push(new Question(ques, answ));
}

function initPlayQs(){
    var ques = "Jaden asks to play outside. He says that wearing a mask is ALL you need to stay safe from COVID-19.<br/>True or False?";
    var answ = "False";
    playQuestions.push(new Question(ques, answ));
    ques = "It's okay to be scared or nervous because of COVID-19.<br/>True or False?";
    answ = "True";
    playQuestions.push(new Question(ques, answ));
    ques = "Lela said that eating cookies covered with fudge will make her body stronger to fight COVID-19<br/>True or False?";
    answ = "False";
    playQuestions.push(new Question(ques, answ));
    ques = "Jamison says that singing the Happy Birthday song two times is the amount of time you need to wash your hands.<br/>True or False?";
    answ = "True";
    playQuestions.push(new Question(ques, answ));
    ques = "Divya says that COVID-19 and Seasonal Allergies are nothing alike.<br/>True or False?";
    answ = "False";
    playQuestions.push(new Question(ques, answ));
    ques = "Should I make my own hand sanitizer if I can not find it in the stores?<br/>True or False?";
    answ = "False";
    playQuestions.push(new Question(ques, answ));
    ques = "Gemma says her dad has COVID-19 so he is allowed to walk around the house just not outside. Is that true?<br/>True or False?";
    answ = "False";
    playQuestions.push(new Question(ques, answ));
    ques = "Daniel says that MOST people get COVID-19 from packages.<br/>True or False?";
    answ = "False";
    playQuestions.push(new Question(ques, answ));
    ques = "Ricardo says if you do not wear a mask the store does not have to let you in. Is that true?<br/>True or False?";
    answ = "True";
    playQuestions.push(new Question(ques, answ));
    ques = "Jacobi says if you ever go into public you should always wear a mask!<br/>True or False?";
    answ = "True";
    playQuestions.push(new Question(ques, answ));
    ques = "Yin says that she wants to stay 6 feet apart when you guys meet at the playground? Is she being safe?<br/>True or False?";
    answ = "True";
    playQuestions.push(new Question(ques, answ));
    ques = "Will warm weather stop the outbreak of COVID-19?<br/>True or False?";
    answ = "False";
    playQuestions.push(new Question(ques, answ));
    ques = "Solange says she thinks her dog Rocky has COVID-19. Is that possible?<br/>True or False?";
    answ = "True";
    playQuestions.push(new Question(ques, answ));
    ques = "Ronit says that double masking keeps us even safer from COVID-19?<br/>True or False?";
    answ = "True";
    playQuestions.push(new Question(ques, answ));
}

function covid(){
    let covidPercentageField = document.getElementById("covid");
    covidPercentageField.innerHTML = "COVID Percentage: " + covidPercentage + "%";
    
}

window.onload = covid();

function doctor(){
    hideSelector();
    showDoc();
}

function playground(){
    hideSelector();
    showPlay();
}

function home(){
    hidePlay();
    hideDoc();
    hidePlayQ();
    hideDocQ();
    showSelector();
    covid();
}

function docGame(){
    initDocQs();
    hideDoc();
    showDocQ();
    let streakField = document.getElementById("dStreak");
    streakField.innerHTML = "Correct Answer Streak: " + ansStreak;
    questionNum = 1;
    ansStreak = 0;

    let questionField = document.getElementById("dQuestion");
    questionField.innerHTML = "Question #" + questionNum + ":";
    let dDisplayField = document.getElementById("dDisplay");
    toRemove = Math.floor(Math.random() * docQuestions.length);
    usedQ = docQuestions[toRemove];
    dDisplayField.innerHTML = usedQ.getQ();
    docQuestions.splice(toRemove, 1);
}

function playGame(){
    initPlayQs();
    hidePlay();
    showPlayQ();
    let streakField = document.getElementById("pStreak");
    streakField.innerHTML = "Correct Answer Streak: " + ansStreak;
    questionNum = 1;
    ansStreak = 0;

    let questionField = document.getElementById("pQuestion");
    questionField.innerHTML = "Question #" + questionNum + ":";
    let pDisplayField = document.getElementById("pDisplay");
    toRemove = Math.floor(Math.random() * playQuestions.length);
    usedQ = playQuestions[toRemove];
    pDisplayField.innerHTML = usedQ.getQ();
    playQuestions.splice(toRemove, 1);
}

function docAnswer(ans){
    if(ans == usedQ.getA()){
        ansStreak++;
    } else {
        covidPercentage += 10;
        ansStreak = 0;
    }
    if (ansStreak > 3){
        if(covidPercentage > 0){
            var change = ansStreak - 3;
            if(change > covidPercentage){
                covidPercentage = 0;
            } else {
                covidPercentage -= change;
            }
        }
    }
    covid();
    let streakField = document.getElementById("dStreak");
    streakField.innerHTML = "Correct Answer Streak: " + ansStreak;
    if(covidPercentage < 100 && questionNum <= 10){
        questionNum++;
        let questionField = document.getElementById("dQuestion");
        questionField.innerHTML = "Question #" + questionNum + ":";
        let dDisplayField = document.getElementById("dDisplay");
        toRemove = Math.floor(Math.random() * docQuestions.length);
        usedQ = docQuestions[toRemove];
        dDisplayField.innerHTML = usedQ.getQ();
        docQuestions.splice(toRemove, 1);
    } else if(covidPercentage >= 100) {
        alert("Game Over! Starting new game...");
        covidPercentage = 0;
        home();
    } else {
        alert("Win!");
        home();
    }
}

function playAnswer(ans){
    if(ans == usedQ.getA()){
        ansStreak++;
    } else {
        covidPercentage += 10;
        ansStreak = 0;
    }
    if (ansStreak > 3){
        if(covidPercentage > 0){
            var change = ansStreak - 3;
            if(change > covidPercentage){
                covidPercentage = 0;
            } else {
                covidPercentage -= change;
            }
        }
    }
    covid();
    let streakField = document.getElementById("pStreak");
    streakField.innerHTML = "Correct Answer Streak: " + ansStreak;
    if(covidPercentage < 100 && questionNum <= 10){
        questionNum++;
        let questionField = document.getElementById("pQuestion");
        questionField.innerHTML = "Question #" + questionNum + ":";
        let pDisplayField = document.getElementById("pDisplay");
        toRemove = Math.floor(Math.random() * playQuestions.length)
        usedQ = playQuestions[toRemove];
        pDisplayField.innerHTML = usedQ.getQ();
        playQuestions.splice(toRemove, 1);
    } else if(covidPercentage >= 100) {
        covidPercentage = 0;
        home();
        alert("Game Over! Starting new game...");
    } else {
        home();
        alert("Win!");
    }
}
