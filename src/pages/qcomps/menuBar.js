export default function MenuBar() {
  return (
    <div>
      <AButton>
        Button 1
      </AButton>
      <AButton>
        Button 2
      </AButton>
    </div>
  );
}

function AButton({ id, color, size, children }) {
  return (
    <button id={`${id}`} onClick={() => {
      document.getElementById(`${id}`).style.backgroundColor = color;
      document.getElementById(`${id}`).style.fontSize = size;
    }}>
      {children}
    </button>
  );
}
