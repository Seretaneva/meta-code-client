export default function DisplayLessonContent ({ contents }) {
  console.log('AICI', contents)
  return (
    <div>
      {contents.map(content =>
        content.file === undefined ? (
          <div key={content.contentIndex}>
            {' '}
            <div className='card' key={content.contentIndex}>
              <p className='card-id'>Conent index: {content.contentIndex}</p>
              <p className='card-name'>Content: {content.contentParagraph}</p>
              {/* <img width={400} height={250} src={content.file}></img> */}
            </div>
          </div>
        ) : (
          <div key={content.contentIndex}>
            {' '}
            <p className='card-id'>Conent index: {content.contentIndex}</p>
            {/* <p className='card-name'>Content: {content.contentParagraph}</p> */}
            <img width={400} height={250} src={content.file}></img>
          </div>
        )
      )}
    </div>
  )
}
