import { Submission } from "../../domain/entities/submission";
import { ChallangesRepository } from "../repositories/ChallangesRepository";
import { StudentRepository } from "../repositories/StudentsRepository";

type CreateChallangeSubmissionRequest = {
  studentId: string;
  challangeId: string;
};

export class CreateChallangeSubmission {
  constructor(
    private studentsRepository: StudentRepository,
    private challangesRepository: ChallangesRepository
  ) {}

  async execute({ studentId, challangeId }: CreateChallangeSubmissionRequest) {
    const student = await this.studentsRepository.findById(studentId);

    if (!student) {
      throw new Error("Student not found");
    }

    const challange = await this.challangesRepository.findById(challangeId);

    if (!challange) {
      throw new Error("Challange not found");
    }

    const submission = Submission.create({
      studentId,
      challangeId,
    });

    return submission;
  }
}
