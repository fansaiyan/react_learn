import React, {useState, useEffect} from 'react';
import { Test1 } from './components/tes1';

function App() {
  const [namaSiswa, setNamaSiswa] = useState([]);
  useEffect(() => {
    console.log('siswa ditambahkan')
  },[namaSiswa]);
  return (
    <div>
      <input type="text" id="nama_siswa"/>
      <button onClick={() => setNamaSiswa(s => [...s, document.getElementById("nama_siswa").value])}>Tambah</button>
      <h1>Daftar Siswa</h1>
      {namaSiswa.map((v, i) => <Test1 nama={v} key={i}/>)}
    </div>
  );
}

export default App;
