export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='row'>

        <div className='section-title col-xsm-2 col-md-8 m-auto mb-3'>
          
          <h2>Our Services</h2>
          <p className="">
          Creating a strong trust relationship with users is essential for almost any type of service . All rights reserved is the foundation on which a content will share in internet. The word “service” has a similar meaning to “humanitarianism,” and a copywrite service  must have strong ethical values to be successful. 
          </p>
        </div>
        <div className="w-100"></div>
        {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}  

            
            {/* <div className='col-md-4'>
            <i class="fa-solid fa-thumbs-up fa-5x"></i>
            <i class="fa-sharp fa-solid fa-hashtag"></i>
             <div className='service-desc'>
                      <h3>General copyright content</h3>
                      <p>By using this service you will have permission to deploy your link with specific content like pdf or video or image and so on.  you will have copyright content depending on blockchain technology.</p>
              </div>              
            </div> */}
        </div>
      </div>
    </div>
  )
}
