/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/lkYbyEVC1D2
 */

import React from "react";

type UniquePiece = "♔" | "♕" | "♖" | "♗" | "♘" | "♙";

const Tile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">
      {children}
    </div>
  )
}


export default function ChessBoard() {

  const createBoard = () => {
    // create the empty chess board based on regulation size e.g. 8x8
    const board = Array(8).fill(Array(8).fill(null));
    // create the pieces
    const pieces: UniquePiece[] = ["♔", "♕", "♖", "♗", "♘", "♙"];
    // create the empty board
    const emptyBoard = board.map((row, i) => {
      return row.map((_: any, j: number) => {
        return (
          <Tile key={`${i}-${j}`}>
            {pieces[Math.floor(Math.random() * pieces.length)]}
          </Tile>
        )
      })
    })
    return emptyBoard;
  };
  return (
    <div className="grid grid-cols-8 gap-2 p-8 bg-gray-200">
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♜</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♞</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♝</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♛</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♚</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♝</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♞</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♜</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♟</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♟</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♟</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♟</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♟</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♟</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♟</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♟</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1 min-w-full min-h-full" />
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♙</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♙</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♙</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♙</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♙</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♙</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♙</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♙</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♖</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♘</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♗</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♕</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♔</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♗</div>
      <div className="p-2 bg-gray-300 text-center aspect-w-1 aspect-h-1">♘</div>
      <div className="p-2 bg-white text-center aspect-w-1 aspect-h-1">♖</div>
    </div>
  )
}
