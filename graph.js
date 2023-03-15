const DAYS = ['sun','mon','tue','wed','thu','fri','sat'];


const dataCall = async ()=>{
  try {
    let htmlData
    const response = await fetch("./data.json");
    const jsonData  = await response.json();
    // jsonData.forEach(itm => {
       
    //     let bar = `<li>
    //     <span ></span>
    //     <p>${itm.day}</p>
    //     </li>`;
    //     document.querySelector('.days').insertAdjacentHTML("beforeend", bar);

    // });
    console.log(jsonData);
    jsonData.forEach(e=> {
        let color = DAYS[new Date().getDay()] == e.day? '#649f9f': '#ec775f';
        // console.log(DAYS[new Date().getDay()], e.day);
          htmlData=` <li>
          <span style="background-color:${color};height:calc((${e.amount}%/.65))">
          <div class="bar_info">${e.amount}</div>
          </span>
          <p>${e.day}</p>
          </li>`;
          document.querySelector('.days').insertAdjacentHTML("beforeend",htmlData);
          
        });
} catch (error) {
    console.log(error);
}

}
dataCall();