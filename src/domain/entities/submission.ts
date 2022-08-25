import { Entity } from "../../core/domain/Entity";

type SubmissionProps = {
  challangeId: string;
  studentId: string;
  createdAt?: Date;
};

export class Submission extends Entity<SubmissionProps> {
  private constructor(entity: SubmissionProps, id?: string) {
    super(entity, id);
  }

  static create(props: SubmissionProps, id?: string) {
    const submission = new Submission({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    });

    return submission;
  }
}
