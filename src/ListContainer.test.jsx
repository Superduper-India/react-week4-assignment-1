import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'task-1' },
    ],
  }));

  it('deletes task', () => {
    const { getByText } = render((
      <ListContainer />
    ));

    fireEvent.click(getByText(/완료/));

    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: { id: 1 },
    });
  });
});
