import React from 'react';

export default function ServList(props) { 
  return (
    <div class="catalogue">
      { 
        props.items.map((item, index) => (
                                        <div class="service" key = { index }>
                                            {<div class="logo"><img src = {`s3 ${item.name.replace(' ', '+').replace(',', '%2C') } png`} ></img></div>}
                                            <div class="bodyService">
                                                <h1><a href= {`/services/${item.area.replace(/\s+/g,'-')}/${item.name.replace(/\s+/g,'-')}/${item.id}`}  > { item.name } </a></h1>
                                                <p>{ item.description }</p>
                                                <h2>Desde $ { item.cost }</h2>
                                            </div>
                                        </div>
                                        ))
      }


    </div>
  );
}