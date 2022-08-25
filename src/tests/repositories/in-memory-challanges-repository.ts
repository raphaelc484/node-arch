import { ChallangesRepository } from "../../aplication/repositories/ChallangesRepository";
import { Challange } from "../../domain/entities/challenge";

export class InMemoryChallangesRepository implements ChallangesRepository {
  public items: Challange[] = [];

  async findById(id: string): Promise<Challange | null> {
    const student = this.items.find((student) => student.id === id);

    if (!student) {
      return null;
    }

    return student;
  }
}
