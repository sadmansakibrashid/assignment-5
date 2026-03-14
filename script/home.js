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
    <div onclick="loadWordDetail(${lesson.id})" class="bg-white">
  <div class="border-t-4 border-green-500 py-5 px-5 flex justify-between">
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

const loadWordDetail=async(id)=>{
    const url =`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    console.log(url);
    const res= await fetch(url);
    const details=await res.json();
    displayWordDetail(details);
};

const displayWordDetail = (word) => {

  const detailBox = document.getElementById("details-container");

  detailBox.innerHTML = `
    <div>
        <h2 class="font-semibold text-xl">${word.data.title}</h2>
    </div>

    <div class="flex gap-3 items-center my-3">
        <button class="btn btn-success btn-sm rounded-full">${word.status}</button>
        <p>Opened by ${word.data.author}</p>
        <p>${new Date(word.data.createdAt).toLocaleString()}</p>
    </div>

    <div class="flex gap-2 my-2">
       
  <button class="btn btn-soft btn-error">${word.data.labels[0]}</button>
  <button class="btn btn-soft btn-success">${word.data.labels[1]}</button>
</div>
    

    <p class="my-3">${word.data.description}</p>

    <div class="flex justify-between bg-gray-100 p-4 rounded-lg">
        <div>
            <p class="text-gray-500">Assignee</p>
            <h3 class="font-semibold">${word.data.author}</h3>
        </div>

        <div>
            <p class="text-gray-500">Priority</p>
            <button class="btn btn-error btn-xs">${word.data.priority}</button>
        </div>
    </div>
  `;

  document.getElementById("my_modal_5").showModal();
};


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
const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(button => {
  button.addEventListener("click", function () {

    buttons.forEach(btn => btn.classList.remove("btn-primary"));

    this.classList.add("btn-primary");

    const status = this.innerText.toLowerCase();
    if (status === "all") {
      displayLesson(allIssues);
      return;
    }
     const filtered = allIssues.filter(issue =>
      issue.status.toLowerCase() === status
    );

    displayLesson(filtered);
  });
});
