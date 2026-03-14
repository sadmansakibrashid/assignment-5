let allIssues = [];
const loadLessons = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res)=>res.json())
    .then((json)=>{
        allIssues = json.data;
        displayLesson(allIssues);
    });
};
const displayLesson = (lessons)=>{
   const levelContainer=document.getElementById("level-container");
    levelContainer.innerHTML="";

   for(let lesson of lessons){
    const btnDiv=document.createElement("div");
    btnDiv.innerHTML=`
    <div class="bg-white">
  <div class="  py-5 px-5 flex justify-between">
        <div>
            <img src="./assets/Open-Status.png" alt="">
        </div>
        <div>
            <button class="btn btn-soft btn-error">${lesson.priority}</button>
        </div>

    </div>
    <h2 class="font-semibold">${lesson.title}</h2>
    <p>${lesson.description}</p>
    <div>
        <button class="btn btn-soft btn-error">${lesson.labels[0]}</button>
        <button class="btn btn-soft btn-error">${lesson.labels[1]}</button>
    </div>
    <p>#${lesson.id} by ${lesson.author}</p>
    <p>${lesson.createdAt}</p>
    </div>
    `;
     levelContainer.appendChild(btnDiv);
   }
};

 loadLessons();




document.getElementById("new-issue-btn").addEventListener("click", function(){

    const searchValue = document
    .getElementById("search-input")
    .value
    .toLowerCase();

    const filtered = allIssues.filter(issue =>
        issue.title.toLowerCase().includes(searchValue)
    );

    displayLesson(filtered);

});

const filterIssues = (status) => {
    if(status === "all"){
        displayLesson(allIssues);
        return;
    }

    const filtered = allIssues.filter(issue => issue.status.toLowerCase() === status);
    displayLesson(filtered);
};
