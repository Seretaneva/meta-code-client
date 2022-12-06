export default function DisplayLessonContent ({ contents }) {
  return (
    <div>
      {contents.map(content =>
        content.contentImage === undefined ? (
          <div key={content.contentIndex}>
            {' '}
            <br></br>
            <div className='card' key={content.contentIndex}>
              <p className='card-id'>Conent index: {content.contentIndex}</p>
              <p className='card-name'>Content: {content.contentParagraph}</p>
              {/* <img width={400} height={250} src={content.file}></img> */}
            </div>
          </div>
        ) : (
          <div key={content.contentIndex}>
            <br></br>
            <div style={{alignItems: "center"}} className='card' key={content.contentIndex}>
              {' '}
              <p className='card-id'>Conent index: {content.contentIndex}</p>
              {/* <p className='card-name'>Content: {content.contentParagraph}</p> */}
              <img src={content.contentImage} width={200} height={200}></img>
            </div>
          </div>
        )
      )}
    </div>
  )
}
