export interface CourseCardProps {
  id: string;
  title: string;
  provider: string;
  dateFound: string;
  summary: string;
  tags: string[];
}

export interface CourseDetailContentProps {
  course: CourseCardProps;
  // You can add extended data if needed beyond what's in CourseCardProps
  extendedData?: {
    location?: string;
    category?: string;
    tech?: string;
    citizenship?: string;
    description?: string;
  };
}

export interface CourseDataProps {
  id: string;
  title: string;
  provider: string;
  location: string;
  dateFound: string;
  category: string;
  tech: string;
  citizenship: string;
  summary: string;
  description: string;
  tags: string[];
}

export interface CourseModalProps {
  course: CourseDataProps;
  isOpen: boolean;
  onClose: () => void;
}
