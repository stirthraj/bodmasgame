export default function Invoice() {
  return (
    <div className="invoice">
      <hr className="dashline" />

      <div className="table-wrapper">
        <div className="name">Jonathan Doughertty</div>
        <div className="heading grid">
          <div>
            <p>1950, N. Pleasant Street,</p>
            <br /> <p>Lorem Ipsum, Dolor sit amet, Consectetur, Tempor (E)</p>
            <br /> <p>Mumbai - 400072, Maharashtra</p>
          </div>
          <div className="vam ma brightcolor">Submitted</div>
          <div className="vam ma brightcolor">25 Oct 1993</div>
        </div>
        <h3>Invoice for</h3>
        <div className="main grid bb">
          <div>
            <div className="bc">
              <p> Awesome Services India Pvt. Ltd.</p>
              <br />
              <p>Lorem Ipsum, Dolores, 49 Tempor Roac</p>
              <br />
              <p>Dolore eu fugiat nulla pariatur. SC (W)</p>
              <br />
              <p> Mumbai - 400054, Maharashtra</p>
            </div>
          </div>
          <div className="tae">
            <p>
              <b>Payable to :</b>
            </p>
            <br />{" "}
            <p>
              <b>Invoice #:</b>
            </p>
            <br />{" "}
            <p>
              <b>Invoice date :</b>
            </p>
          </div>
          <div>
            <p>Pranshu Sharma</p> <br />
            <p> 10003</p>
            <br /> <p>30 Sep 2017</p>
          </div>
        </div>
        <div className="description-table">
          {/*  Qty Rate Total price  20
          ¥1,000.00 ¥20,000.0 i  3 2240.33 7210
          i ~ Utenim ad minima veniam, quis nostrum i -~ exercitationem ullam
          corporis suscipit laboriosam, n 196.24 ?2,158.6 i ~ nisi ut aliquid ex
          ea commodi consequatu i abedef testitem 3 212.00 2360 Notes Subtotal
          22916 222,916 | | — */}
          <div className="dt-head col bold py5">
            <div>Description</div>
            <div>Qty</div>
            <div>Rate</div>
            <div>Total price</div>
          </div>
          <div className="dt-row col py5">
            <div>dolore eu fugiat nulla pariatur.</div>
            <div>20</div>
            <div>₹1,000.00</div>
            <div>₹20,000.0</div>
          </div>
          <div className="dt-row col py5">
            <div>sed do eiusmod tempor incididunt</div>
            <div>3</div>
            <div>₹240.33</div>
            <div>₹721.0</div>
          </div>
          <div className="dt-row col py5">
            <div>
              Utenim ad minima veniam, quis nostrum
              <br />
              exercitationem ullam corporis suscipit laboriosam,
              <br />
              nisi ut aliquid ex ea commodi consequatu
            </div>
            <div>11</div>
            <div>₹196.24</div>
            <div>₹2,158.6</div>
          </div>
          <div className="dt-row col py5">
            <div> space</div>
            <div> </div>
            <div> </div>
            <div> </div>
          </div>
          <div className="dt-row col mb10 bb2 py5">
            <div>abedef test item</div>
            <div>3</div>
            <div>₹12.00</div>
            <div>₹36.0</div>
          </div>

          <div className="dt-foot col py5 bold">
            <div className="cc">Notes</div>
            <div></div>
            <div>Subtotal</div>
            <div className="cb">₹22,916</div>
          </div>

          <div className="tac brightcolor name mb10 py5">₹22,916</div>
        </div>
      </div>
    </div>
  );
}
