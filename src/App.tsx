import { useState } from "react";

const App = () => {
  const [destino, setDestino] = useState("")
  const [numPerso, setNumPerso] = useState("")
  const [diaEstadia, setDiaEstadia] = useState("")
  const [presupuestoPers, setPresupuestoPers] = useState("")
  const [resultado, setResultado] = useState(null)
  const [estado, setEstado] = useState("")

  const costoTotal = (e) => {
    e.preventDefault();
    if (!destino || !numPerso || !diaEstadia || !presupuestoPers) {
      alert("Porfavor rellene los campos")
      return;
    }

    const costo = numPerso * diaEstadia * presupuestoPers
    let clasificacion;
    if (costo < 800000) clasificacion = "Apto y controlado";
    else if (costo < 1500000) clasificacion = "Gasto intermedio";
    else clasificacion = "Gasto excesivo";

    setResultado(costo.toFixed(2))
    setEstado(clasificacion)
  }

  const limpiar = () => {
    setDestino("");
    setNumPerso("");
    setDiaEstadia("");
    setPresupuestoPers("");
    setResultado(null);
    setEstado("");
  }

  const obtenerColor = () => {
    if (estado == "Gasto intermedio") return "warning";
    if (estado == "Gasto excesivo") return "danger";
    return "secondary";
  }

  return(
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">SIMULADOR DE PRESUPUESTOS DE VIAJE</h3>
            </div>
            <div className="card-body">
              <form onSubmit={costoTotal}>
                {/* Destino */}
                <div className="mb-3">
                  <label className="form-label">Destino:</label>
                  <input className="form-control"
                    type="text"
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                    />
                </div>
                {/* Numero de personas */}
                <div className="mb-3">
                    <label className="form-label">Numero de Personas:</label>
                    <input className="form-control" 
                      type="number"
                      value={numPerso}
                      onChange={(e) => setNumPerso(e.target.value)} 
                    />
                </div>
                {/* Dias de Estadia */}
                <div className="mb-3">
                    <label className="form-label">Dias de Estadia:</label>
                    <input className="form-control" 
                      type="number"
                      value={diaEstadia}
                      onChange={(e) => setDiaEstadia(e.target.value)} 
                    />
                </div>
                {/* Presupuesto por persona */}
                <div className="mb-3">
                    <label className="form-label">Presupuesto por persona:</label>
                    <input className="form-control" 
                      type="number"
                      value={presupuestoPers}
                      onChange={(e) => setPresupuestoPers(e.target.value)} 
                    />
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">
                    Calcular Costo Total
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={limpiar}>
                    Limpiar
                  </button>
                </div>
                {(resultado) && (
                  <div className={`alert alert-${obtenerColor()} my-4`}>
                    <h5>Costo:</h5>
                    <p>
                      <strong>Destino: </strong> {destino}
                    </p>
                    <p>
                      <strong>Numero de personas: </strong> {numPerso}
                    </p>
                    <p>
                      <strong>Dias de estadia: </strong> {diaEstadia}
                    </p>
                    <p>
                      <strong>Costo Total: </strong> {resultado}
                    </p>
                    <p>
                      <strong>Estado: </strong> {estado}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App