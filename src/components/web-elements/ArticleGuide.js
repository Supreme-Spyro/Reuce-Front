import React from 'react'
import bottle from '../../assets/plastic-bottle.jpg'

function ArticleGuide() {
    return (
        <table>
              <tr>
                  <th>
                  </th>
                  <th>
                  <img 
                  src={bottle}
                  className='guideListImage-articles'
                  />
                  </th>
                  <th className='guideListTitle-articles'>
                  How to Appropriately Determine your Plastic Price?
                  </th>
              </tr>
              <tr>
                  <th>
                  </th>
                  <th>
                  <img 
                  src={bottle}
                  className='guideListImage-articles'
                  />
                  </th>
                  <th className='guideListTitle-articles'>
                  How to Appropriately Determine your Plastic Price?
                  </th>
              </tr>
          </table>
    )
}

export default ArticleGuide
