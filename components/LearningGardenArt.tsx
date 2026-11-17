export default function LearningGardenArt() {
  return (
    <div className="garden-art" aria-hidden="true">
      <div className="garden-blob" />
      <div className="garden-peach" />
      <div className="garden-sun" />
      <div className="garden-stem garden-stem-left" />
      <div className="garden-stem garden-stem-right" />
      <div className="garden-leaf garden-leaf-one" />
      <div className="garden-leaf garden-leaf-two" />
      <div className="garden-leaf garden-leaf-three" />
      <div className="garden-leaf garden-leaf-four" />
      <div className="garden-book">
        <div className="garden-book-center" />
        {Array.from({ length: 6 }, (_, index) => (
          <div className="garden-book-line" key={index} />
        ))}
      </div>
      <div className="garden-spark garden-spark-one">✳</div>
      <div className="garden-spark garden-spark-two">✦</div>
    </div>
  )
}
