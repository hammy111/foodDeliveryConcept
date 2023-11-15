import './limons.css'
export default function Limons() {
    const arr = [{
        id:4,
        num: 1,
        text:  'kitchen'
    },
    {
        id:2,
        num: 11,
        text:  'specialties'
    },
    {
        id:1,
        num: 11,
        text:  'restaurants'
    },
    {
        id:3,
        num: 1,
        text:  'transport costs'
    }]
  return (
    <div className='limons_container'>
            {arr.map((item,i) =>{
                return <div className={`limons_circles limon_${i}`} key={item.id}>
                <div className="circle">
                    <p>{item.num}</p>
                </div>
                <p>{item.text}</p>
            </div>
            })}           
    </div>
  )
}
