import { CourseThumbnailUI } from './Courses';
import classes from './CourseThumbnail.module.css';

export default function CourseThumbnail({
  course,
}: {
  course: CourseThumbnailUI;
}) {
  return (
    <div className={classes.container}>
      <div className={classes.image}>{course.image}</div>
      <h3 className={classes.title}>{course.title}</h3>
      <p className={classes.description}>{course.description}</p>
      <div>
        <span className={classes.videoCount}>{course.videoCount}</span>
        <span className={classes.length}>{course.length}</span>
      </div>
    </div>
  );
}
