import { Challange } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { InMemoryChallangesRepository } from "../../tests/repositories/in-memory-challanges-repository";
import { InMemoryStudentsRepository } from "../../tests/repositories/in-memory-students-repository";
import { CreateChallangeSubmission } from "./create-challange-submission";

describe("Create challange submission use case", () => {
  it("should be able to creat a new challange submission", async () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const challangesRepository = new InMemoryChallangesRepository();

    const student = Student.create({
      name: "John Doe",
      email: "johndoe@example.com",
    });

    const challange = Challange.create({
      title: "Challange Test",
      instructionsUrl: "https://challenges.example.com/challangeTest",
    });

    studentsRepository.items.push(student);
    challangesRepository.items.push(challange);

    const sut = new CreateChallangeSubmission(
      studentsRepository,
      challangesRepository
    );

    const response = await sut.execute({
      studentId: student.id,
      challangeId: challange.id,
    });

    expect(response).toBeTruthy();
  });
});
