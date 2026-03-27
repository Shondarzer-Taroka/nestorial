import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  private categories = ['moble', 'laptop', 'tv'];
  getAllCategories() {
    return this.categories;
  }
}
