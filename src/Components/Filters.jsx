import '../Styles/Filters.css'

export function Filters (props, changeFilters) {

    return (
        <section className="filters">
            <div className='filtros'>
                <label htmlFor="available" onChange={props.handleChangeAvailable}>Disponible:</label>
                <select id='available' onChange={props.handleChangeAvailable}>
                    <option value="all">Todas</option>
                    <option value="Si">Solo Disponibles</option>
                </select>
                <label htmlFor='category'>Categoria:</label>
                <select id='category' onChange={props.handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="Dibujo">Dibujo</option>
                    <option value="Vitral">Vitral</option>
                    <option value="Pintura">Pintura</option>
                    <option value="Manualidad">Manualidad</option>
                </select>
                <button className="btn" onClick={props.handleSort}>{props.sort ? 'Desactivar' : 'Activar'} orden alfabético</button>
            </div>
        </section>
    )
}