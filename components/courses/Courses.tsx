import { GetStaticProps } from 'next';
import { useState } from 'react';
import Container from '../layouts/Container';
import Section from '../layouts/Section';
import SearchBox from '../ui/SearchBox';
import classes from './Courses.module.css';
import CourseThumbnail from './CourseThumbnail';

export type CourseThumbnailUI = {
  title: string;
  description: string;
  image: JSX.Element;
  length: string;
  videoCount: number;
};

export default function Courses({ courses }: { courses: CourseThumbnailUI[] }) {
  const [filteredCourses, setFilteredCourses] = useState(courses);

  function onCourseSearch(value: string) {
    if (value) {
      const _filteredCourses = courses.filter(
        (course) =>
          course.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      setFilteredCourses(_filteredCourses);
    } else {
      setFilteredCourses(courses);
    }
  }

  return (
    <Section
      title="Start Your Day By Turning Your Coffee Into Code"
      description="Be A Job Ready Software Engineer By Watching My Great Up-to-Date Courses"
    >
      <Container>
        <SearchBox
          placeholder="search courses..."
          sendSearchData={onCourseSearch}
        />
        <div className={classes.container}>
          {filteredCourses.map((course) => (
            <CourseThumbnail key={course.title} course={course} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
