import { useState, useMemo, useCallback, useRef } from "react";

function ProductList() {

  const [search, setSearch] = useState("");

  const inputRef = useRef();


  const products = [
    "Laptop",
    "Mobile",
    "Tablet",
    "Keyboard"
  ];


  // useMemo
  const filteredProducts = useMemo(() => {

    return products.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);


  // useCallback
  const handleSearch = useCallback((e) => {

    setSearch(e.target.value);

  }, []);


  // useRef
  function focusInput() {

    inputRef.current.focus();

  }


  return (
    <div>

      <h1>Product Search</h1>

      <input
        ref={inputRef}
        value={search}
        onChange={handleSearch}
      />

      <button onClick={focusInput}>
        Focus
      </button>


      {
        filteredProducts.map((item,index)=>(
          <p key={index}>{item}</p>
        ))
      }

    </div>
  )
}

export default ProductList;