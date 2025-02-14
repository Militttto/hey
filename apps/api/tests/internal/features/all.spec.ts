import getAuthApiHeadersForTest from '@hey/lib/getAuthApiHeadersForTest';
import { TEST_URL } from '@utils/constants';
import axios from 'axios';
import { describe, expect, test } from 'vitest';

describe('internal/features/all', () => {
  test('should return all features', async () => {
    const response = await axios.get(`${TEST_URL}/internal/features/all`, {
      headers: await getAuthApiHeadersForTest()
    });

    expect(response.data.features).toBeInstanceOf(Array);
  });
});
