import "./App.css";
import { useState, useEffect, CSSProperties } from "react";
import GridLoader from "react-spinners/GridLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <GridLoader 
         color="#36d7b7"
         size={50}
         margin={10}
         loading
        />
      ) : (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            expedita quidem veritatis illum possimus vel libero ex dolor cumque
            natus. Ducimus eveniet quod unde amet facilis itaque ut voluptas,
            nesciunt quae commodi. Possimus labore doloribus neque. Atque
            reiciendis omnis quasi laborum nam voluptatum libero quos saepe ut
            dignissimos obcaecati, quam cumque expedita reprehenderit.
            Accusantium ducimus optio doloribus molestiae pariatur culpa ab
            doloremque neque quisquam inventore, eos distinctio illum eligendi
            eius corrupti tenetur cupiditate deserunt, nisi placeat quasi at
            dolor quia? Illum perspiciatis, ex voluptatum voluptatibus
            laudantium eveniet. Ad officia corporis aspernatur quod qui optio ea
            nemo enim quisquam quos ipsa vitae sint veniam nisi corrupti libero,
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
