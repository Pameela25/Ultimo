import React, { useState } from 'react';
import "./assets/main.css";

/**Funcion que declara el menú, tendra el registro y el login */
function Menu({ setPage }) {
  return (
    <div className="menu">
      <button  onClick={() => setPage('registrar')}>Registrar</button>
      <button  onClick={() => setPage('login')}>Login</button>
    </div>
  );
}

function Registrar({ setPage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos a tu servidor o almacenarlos en una base de datos
    console.log({
      name,
      email,
      password,
    });
    setPage('formulario');
  };

  return (
    <div >
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          className="field-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
         />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          className="field-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          className="field-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button  onClick={() => setPage('formulario')}  className="btn" type="submit">Registrarse</button>
      </form>
    </div>
  );
}
function Formulario() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sexoComercial, setSexoComercial] = useState('');
  const [telefonoCliente, setTelefonoComercial] = useState('');
  const [productos, setProductos] = useState([]);
  const [productosDestacados, setProductosDestacados] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes agregar la lógica para enviar los datos a tu servidor o almacenarlos en una base de datos
      console.log({
      productos,
      productosDestacados,
      telefonoCliente,
      nombre,
      sexoComercial
      });
  };
return (
  <div className="w-full rounded overflow-hidden shadow-lg">
    <h1 >Formulario</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre del cliente:</label>
      <input
        id="nombre"
        type="text"
        className="field-input"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />

      <label htmlFor="telefono">Número de teléfono del cliente:</label>
      <input
        id="telefono"
        type="tel"
        className="field-input"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        required
      />

      <label htmlFor="sexo">Sexo del comercial:</label>
      <select
        id="sexo"
        className="field-input"
        value={sexoComercial}
        onChange={(e) => setSexoComercial(e.target.value)}
        required
      >
        <option value="">Selecciona una opción</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
      </select>

      <label htmlFor="telefono-cliente">Número de teléfono del comercial:</label>
      <input
        id="telefono-cliente"
        className="field-input"
        type="tel"
        value={telefonoCliente}
        onChange={(e) => setTelefonoComercial(e.target.value)}
        required
      />

      <label htmlFor="productos">Productos:</label>
      <input
      id="productos"
      className="field-input"
      type="file"
      name="productos" 
      accept=".txt,.pdf,.csv"
      required>

      </input>


      <label htmlFor="productos-destacados">Productos destacados:</label>
    <input
      id="productos-destacados"
      className="field-input"
      type="file"
      name="productos"
      accept=".txt,.pdf,.csv"
      multiple
      onChange={(e) => {
        // Manejo de evento onChange aquí
        console.log(e.target.files);
      }}
    />

      <button className="btn" type="submit">Enviar</button>
    </form>
  </div>
);
}

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes agregar la lógica para verificar las credenciales del usuario
      console.log({
          username,
          password,
      });
    };
  
    return (
      <div className="w-full rounded overflow-hidden shadow-lg">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            id="username"
            className="field-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
  
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            className="field-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
            
          <a href="#" className="block py-2"  >¿Olvidaste tu contraseña?</a>
          <button className="btn" type="submit">Iniciar sesión</button>
        </form>
      </div>
    );
}
  

function App() {
  /**indico en que pagina inicial*/
  const [page, setPage] = useState('registrar');

  return (
    <div>
     <h1  h1 className="font-bold text-4xl text-black p-10 font-cursive">Nombre empresa</h1>
        <div className="portada flex justify-center items-center h-screen">
            <h1  className="bg-pastel text-center text-8xl text-black p-10">Bienvenido </h1>
        </div>
    <div className="contenido">
      <Menu setPage={setPage} />
     {/**Se van a mover entre paginas*/}
      {page === 'registrar' && <Registrar setPage={setPage} />}
      {page === 'login' && <Login setPage={setPage} />}
      {page === 'formulario' && <Formulario setPage={setPage} />}
    </div>
  </div>
  );
}

export default App;