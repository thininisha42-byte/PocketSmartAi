const state={type:"home"};
const form=document.getElementById("plannerForm"), fields=document.getElementById("formFields");
const results=document.getElementById("results"), recs=document.getElementById("recommendations"), total=document.getElementById("budgetTotal");

const configs={
 home:{
  title:"Home Interior Budget Planner",
  fields:`<label>Total budget (₹)</label><input id="budget" type="number" min="500" value="25000" required>
  <label>Room</label><select id="room"><option>Living Room</option><option>Bedroom</option><option>Kitchen</option></select>
  <label>Style</label><select id="style"><option>Modern</option><option>Minimal</option><option>Traditional</option></select>`,
  items:[["💡","LED Lighting","₹2,499","Budget-friendly lighting"],["🪑","Compact Furniture","₹8,999","Space-saving choice"],["🖼️","Wall Decor","₹1,499","Style-matched decor"]]
 },
 party:{
  title:"Party Budget Planner",
  fields:`<label>Total budget (₹)</label><input id="budget" type="number" min="1000" value="15000" required>
  <label>Guests</label><input id="guests" type="number" min="2" value="20" required>
  <label>Event type</label><select id="event"><option>Birthday</option><option>College Event</option><option>Wedding</option><option>Corporate</option></select>`,
  items:[["🍱","Food Package","₹6,000","Catering allocation"],["🎈","Decoration","₹3,000","Theme decoration"],["🎵","Entertainment","₹2,500","Music & activities"]]
 },
 jewelry:{
  title:"Jewelry Budget Planner",
  fields:`<label>Total budget (₹)</label><input id="budget" type="number" min="500" value="5000" required>
  <label>Occasion</label><select id="occasion"><option>College Function</option><option>Wedding</option><option>Festival</option><option>Party</option></select>
  <label>Style</label><select id="style"><option>Elegant</option><option>Traditional</option><option>Minimal</option><option>Statement</option></select>
  <label>Optional outfit image</label><input id="outfit" type="file" accept="image/*">`,
  items:[["📿","Necklace Set","₹1,999","Occasion-matched"],["✨","Earrings","₹899","Easy-to-pair style"],["💍","Bracelet","₹699","Budget-friendly accent"]]
 }
};

function renderForm(){fields.innerHTML=`<h2>${configs[state.type].title}</h2>${configs[state.type].fields}`;results.classList.add("hidden")}
document.querySelectorAll(".tab").forEach(btn=>btn.onclick=()=>{document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));btn.classList.add("active");state.type=btn.dataset.type;renderForm()});
form.onsubmit=e=>{
 e.preventDefault();
 const budget=Number(document.getElementById("budget").value);
 total.textContent=`Budget: ₹${budget.toLocaleString("en-IN")}`;
 recs.innerHTML=configs[state.type].items.map(x=>`<article class="item"><div class="icon">${x[0]}</div><h3>${x[1]}</h3><div class="price">${x[2]}</div><div class="tag">${x[3]}</div></article>`).join("");
 results.classList.remove("hidden");results.scrollIntoView({behavior:"smooth"});
};
renderForm();
