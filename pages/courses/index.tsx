import { GetStaticProps } from 'next';
import Courses, { CourseThumbnailUI } from '../../components/courses/Courses';
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
} from 'react-icons/si';
import { BsCodeSlash } from 'react-icons/bs';

export default function CoursesPage() {
  const courses: CourseThumbnailUI[] = [
    {
      title: 'Learn Typescript',
      description:
        'This is a small description about the course describing the course content summary.',
      image: <SiTypescript />,
      length: '12:47',
      videoCount: 67,
    },
    {
      title: 'Learn Next.js',
      description:
        'This is a small description about the course describing the course content summary.',
      image: <SiNextdotjs />,
      length: '18:23',
      videoCount: 103,
    },
    {
      title: 'React Masterclass with Redux',
      description:
        'This is a small description about the course describing the course content summary.',
      image: <SiReact />,
      length: '36:02',
      videoCount: 211,
    },
    {
      title: 'Become A MERN Stack Developer',
      description:
        'This is a small description about the course describing the course content summary.',
      image: <SiReact />,
      length: '28:54',
      videoCount: 167,
    },
    {
      title: 'The Beauty of Writing Clean Code',
      description:
        'This is a small description about the course describing the course content summary.',
      image: <BsCodeSlash />,
      length: '05:58',
      videoCount: 33,
    },
    {
      title: 'Node.js Masterclass with Express.js',
      description:
        'This is a small description about the course describing the course content summary.',
      image: <SiNodedotjs />,
      length: '25:25',
      videoCount: 129,
    },
  ];

  return <Courses courses={courses} />;
}
