import React from 'react'
import bottle from '../../assets/plastic-bottle.jpg'

function ArticleGuide(props) {
    return (
        <table>
              <tr>
                  <td>
                  <img 
                  src={bottle}
                  className='guideListImage-articles'
                  />
                  </td>
                  <td className='guideListTitle-articles'>
                  <a href='asd'>How to Appropriately Determine your Plastic Price?</a>
                  </td>
              </tr>
          </table>
    )
}

export default ArticleGuide
