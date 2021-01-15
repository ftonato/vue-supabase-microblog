import { createClient } from '@supabase/supabase-js';

export default class DatabaseService {
  constructor() {
    this.database = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY)
  }

  getInstance() {
    return this.database;
  }
}
