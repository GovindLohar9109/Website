import path from 'path';
import { fileURLToPath } from 'url';

// This part is needed because __dirname is not available in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/app.js', // change to your main JS file name
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // 'production' for CI
};
