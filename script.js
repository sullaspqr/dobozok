
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
  <div style="width: 200px; position: absolute; left: ${state.x}px; top: ${state.y}px;"
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
    document.getElementById("drag-and-drop-app").innerHTML = doboz;
}
    function dobozDragStart() {
      state.isDragged = true;
      console.clear();
      console.log(state.isDragged);
      render();
    }
    function dobozDragEnd() {
      state.isDragged = false;
      console.clear();
      console.log(state.isDragged);
      render();
    }    
    function dobozMouseMove(event) {
      if (state.isDragged) {
        const box = event.target.closest(".box");
        if (!box) {
          return;
        }
        state.x = document.documentElement.scrollLeft+ event.clientX - box.offsetWidth / 2;
        state.y = document.documentElement.scrollTop + event.clientY - box.offsetHeight / 2;
        console.clear();
        console.log(state.x);
        console.log(state.y);
        render();
      }
      
    }