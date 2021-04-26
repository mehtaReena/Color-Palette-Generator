function ColorBox(props) {
    return (

        <div className='color-box'
        style={{
            backgroundColor:props.color,
            opacity: props.shade,
          }}>
        

           
        </div>
    )

}
export default ColorBox;