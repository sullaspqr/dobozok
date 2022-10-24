let state = {
  x: undefined,
  y: undefined,
  isDragged: false,
};

const container = document.getElementById("drag-and-drop-app");
state.x = container.offsetLeft;
state.y = container.offsetTop;

window.onload = render;

function render() {

  const doboz = `
    <div
      style="width: 200px; position: absolute; left: ${state.x}px; top: ${state.y}px;"
      class="box ${state.isDragged ? "grabbed" : "not-grabbed"}"
      onmousedown="dobozDragStart()"
      onmouseup="dobozDragEnd()"
      onmousemove="dobozMouseMove(window.event)"
    >
      <div class="card-body">
        <h5 class="card-title display-4"># húzd arrébb</h5>
      </div>
    </div>
  `;
console.log(state.x);
console.log(state.y);
console.log(state.isDragged);
  document.getElementById("drag-and-drop-app").innerHTML = doboz;
}

// 3. A doboz mousedown eseményre reagálva módosítsd a state isDragged értékét true-ra
function dobozDragStart() {
  state.isDragged = true;
  render();
}

// 4. A doboz mouseup eseményre reagálva módosítsd a state isDragged értékét false-ra
function dobozDragEnd() {
  state.isDragged = false;
  render();
}

/* 5. A doboz mousemove eseménykor vizsgáld meg, hogy a state.isDragged értéke true-e
Amennyiben igen, írd be a state x és y kulcsa alá az egér aktuális x,y pozícióját */
function dobozMouseMove(event) {
  if (state.isDragged) {
    const box = event.target.closest(".box");
    if (!box) {
      return;
    }
    state.x = document.documentElement.scrollLeft + event.clientX - box.offsetWidth / 2;
    state.y = document.documentElement.scrollTop + event.clientY - box.offsetHeight / 2;
    render();
  }
}

// 7. Az állapotváltozások után hívd meg a renderelő függvényt
